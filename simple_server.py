#!/usr/bin/env python3
"""
Simple one-liner server for quick testing
"""

import http.server
import socketserver
import webbrowser
import os
import socket

def find_port(start_port=8000):
    """Find a free port"""
    port = start_port
    while port < start_port + 100:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(("", port))
                return port
        except OSError:
            port += 1
    return 8080  # fallback

PORT = find_port()

# Change to script directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"🚀 Starting simple server on http://localhost:{PORT}")
print("📁 Serving files from current directory")
print("🛑 Press Ctrl+C to stop")

# Open browser
webbrowser.open(f"http://localhost:{PORT}")

# Start server
with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    httpd.serve_forever()