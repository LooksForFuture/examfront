type MessageCallback = (data: any) => void;

class WebSocketManager {
  private url: string;
  private socket: WebSocket | null = null;
  private listeners: Set<MessageCallback> = new Set();
  private queue: Array<any> = new Array();

  constructor(url: string) {
    this.url = url;
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
      if (this.queue.length > 0) {
        this.queue.forEach((data:any) => {
          this.send(data);
        });
        this.queue.length = 0;
      }
    };

    this.socket.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        this.listeners.forEach((callback) => callback(data));
      } catch (e) {
        console.error('Error parsing WebSocket message', e);
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket closed, reconnecting in 3 seconds...');
      setTimeout(() => this.connect(), 3000);
    };
  }

  public subscribe(callback: MessageCallback): () => void {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  public send(data: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      this.queue.push(data);
      console.warn('WebSocket is not open. Unable to send message.');
    }
  }

  public close(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close()
    }
  }
}

const singleSocket = new WebSocketManager('wss://pyteacher.ir/ws/socket-server/');
export default singleSocket;
