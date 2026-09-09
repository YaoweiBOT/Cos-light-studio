#!/usr/bin/env python3
"""Serve the bundled release locally using only Python's standard library."""
import argparse
import json
import sys
import threading
import urllib.parse
import urllib.request
import webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map,
                      '.js': 'text/javascript', '.glb': 'model/gltf-binary',
                      '.json': 'application/json', '.md': 'text/plain',
                      '.svg': 'image/svg+xml'}

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

    def list_directory(self, path):
        self.send_error(404, 'Not found')
        return None

    def send_head(self):
        if urllib.parse.urlsplit(self.path).path == '/__health':
            import io
            data = json.dumps({'application': 'cos-light-studio', 'version': '0.2.0'}).encode()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            return io.BytesIO(data)
        path = Path(self.translate_path(self.path)).resolve()
        if DIST.resolve() not in path.parents and path != DIST.resolve():
            self.send_error(404, 'Not found')
            return None
        return super().send_head()

    def log_message(self, format, *args):
        if len(args) > 1 and str(args[1]) in {'200', '304'}:
            return
        super().log_message(format, *args)


def main():
    parser = argparse.ArgumentParser(description='Cos Light Studio local server')
    parser.add_argument('--port', type=int, default=5273)
    parser.add_argument('--no-open', action='store_true')
    args = parser.parse_args()
    if not 1024 <= args.port <= 65535:
        parser.error('Port must be between 1024 and 65535.')
    if not (DIST / 'index.html').is_file():
        sys.exit('Missing dist/index.html. Extract the complete release ZIP, or run npm ci and npm run build.')
    url = 'http://127.0.0.1:{}/'.format(args.port)
    # Ignore system proxy settings for this loopback-only health request.
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    try:
        with opener.open(url + '__health', timeout=0.6) as response:
            running = json.load(response).get('application') == 'cos-light-studio'
    except Exception:
        running = False
    if running:
        print('Cos Light Studio is already running: ' + url)
        if not args.no_open:
            webbrowser.open(url)
        return
    try:
        server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, directory=str(DIST)))
    except OSError as error:
        sys.exit('Cannot start local server: {}. Try --port=5274 (saved studies use a separate browser origin).'.format(error))
    print('\nCos Light Studio: ' + url + '\nKeep this window open. Press Ctrl+C to stop.\n', flush=True)
    if not args.no_open:
        threading.Thread(target=webbrowser.open, args=(url,), daemon=True).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nStopped.')
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
