#!/usr/bin/env python3
"""
Simple HTTP server to host the OS Lab Quiz application.
Run this script to start the server on port 8000.
"""

import http.server
import socketserver
import os

# Configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Server started successfully!")
        print(f"📂 Serving files from: {DIRECTORY}")
        print(f"🌐 Open your browser and go to: http://localhost:{PORT}")
        print(f"📝 Quiz URL: http://localhost:{PORT}/index.html")
        print(f"\nPress Ctrl+C to stop the server.\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Server stopped.")
            print("Goodbye! 👋\n")

if __name__ == "__main__":
    main()
