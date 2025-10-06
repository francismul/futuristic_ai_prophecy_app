#!/usr/bin/env python3
"""
Simple HTTP Server for Static Files
Serves the futuristic AI prophecy app locally for development and testing.
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

# Configuration
DEFAULT_PORT = 8000
DEFAULT_HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve files with proper MIME types and CORS headers"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        
        # Add cache control for development (no caching)
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        super().end_headers()
    
    def guess_type(self, path):
        """Enhanced MIME type detection"""
        # Convert path to string if it's not already
        path_str = str(path)
        
        # Handle specific file types for web apps first
        if path_str.endswith('.js'):
            return 'application/javascript'
        elif path_str.endswith('.css'):
            return 'text/css'
        elif path_str.endswith('.json'):
            return 'application/json'
        elif path_str.endswith('.svg'):
            return 'image/svg+xml'
        elif path_str.endswith('.webmanifest') or path_str.endswith('manifest.json'):
            return 'application/manifest+json'
        
        # Fall back to parent implementation
        return super().guess_type(path)
    
    def do_GET(self):
        """Handle GET requests with fallback to index.html for SPA"""
        # Serve index.html for the root path
        if self.path == '/':
            self.path = '/index.html'
        
        # Check if file exists, if not serve index.html (SPA fallback)
        file_path = self.path.lstrip('/')
        if not os.path.exists(file_path) and not self.path.startswith('/assets'):
            self.path = '/index.html'
        
        return super().do_GET()
    
    def log_message(self, format, *args):
        """Custom logging with colors"""
        message = format % args
        print(f"🌐 {self.address_string()} - {message}")

def find_free_port(start_port=DEFAULT_PORT):
    """Find a free port starting from the given port"""
    import socket
    port = start_port
    while port < start_port + 100:  # Try 100 ports
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(("", port))
                return port
        except OSError:
            port += 1
    return None

def start_server(port=None, host=DEFAULT_HOST, open_browser=True):
    """Start the HTTP server"""
    
    # Change to the script directory (project root)
    script_dir = Path(__file__).parent.absolute()
    os.chdir(script_dir)
    
    # Find a free port if none specified
    if port is None:
        port = find_free_port()
        if port is None:
            print("❌ Could not find a free port!")
            sys.exit(1)
    
    try:
        # Create server
        with socketserver.TCPServer((host, port), CustomHTTPRequestHandler) as httpd:
            server_url = f"http://{host}:{port}"
            
            print("🚀 Starting Futuristic AI Prophecy App Server")
            print("=" * 50)
            print(f"📡 Server running at: {server_url}")
            print(f"📁 Serving files from: {script_dir}")
            print(f"🌍 Host: {host}")
            print(f"🔌 Port: {port}")
            print("=" * 50)
            print("💡 Press Ctrl+C to stop the server")
            print()
            
            # Open browser automatically
            if open_browser:
                print("🌐 Opening browser...")
                webbrowser.open(server_url)
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use!")
            print("💡 Try a different port or stop the process using that port")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(
        description="Serve the Futuristic AI Prophecy App locally",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python server.py                    # Start on default port 8000
  python server.py --port 3000       # Start on port 3000
  python server.py --host 0.0.0.0    # Allow external connections
  python server.py --no-browser      # Don't open browser automatically
        """
    )
    
    parser.add_argument(
        '--port', '-p',
        type=int,
        default=None,
        help=f'Port to serve on (default: auto-detect starting from {DEFAULT_PORT})'
    )
    
    parser.add_argument(
        '--host',
        default=DEFAULT_HOST,
        help=f'Host to serve on (default: {DEFAULT_HOST})'
    )
    
    parser.add_argument(
        '--no-browser',
        action='store_true',
        help='Don\'t open browser automatically'
    )
    
    args = parser.parse_args()
    
    start_server(
        port=args.port,
        host=args.host,
        open_browser=not args.no_browser
    )