import asyncio
import websockets

async def echo(websocket):
    async for message in websocket:
        print(f"Received: {message}")
        await websocket.send(message)  # Echo back the message

async def main():
    async with websockets.serve(echo, "localhost", 8080):
        print("WebSocket server started on port 8080")
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())