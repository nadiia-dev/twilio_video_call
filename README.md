# Twilio Video Call Application

A real-time video calling application built with Twilio's Programmable Video API, enabling video communication with audio and video streaming.

## Features

- **Real-time Video Calling**: Video communication using Twilio Video SDK
- **Room Management**: Create and join video rooms with unique identifiers
- **Responsive Design**: Optimized for desktop and mobile devices
- **Secure Authentication**: Token-based authentication for secure connections

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Video SDK**: Twilio Video JavaScript SDK
- **Backend**: Node.js (for token generation)
- **Authentication**: Twilio Access Tokens
- **Real-time Communication**: WebRTC (via Twilio infrastructure)

## Prerequisites

Before running this application, make sure you have:

- Node.js (v20 or higher)
- npm package manager
- A Twilio account with Video API enabled
- Twilio Account SID and Auth Token
- API Key and API Secret from Twilio Console

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nadiia-dev/twilio_video_call.git
   cd twilio_video_call
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory and add your Twilio credentials:

   ```env
   ACCOUNT_SID=your_account_sid_here
   AUTH_TOKEN=your_auth_token_here
   API_KEY=your_api_key_here
   API_SECRET=your_api_secret_here
   ```

4. **Start the application**

   ```bash
   npm run dev
   ```

5. **Access the application**

   Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter Your Name**: Provide your display name for the call
2. **Room Name**: Enter a unique room name or create a new one
3. **Join Room**: Click the join button to enter the video call
4. **Grant Permissions**: Allow camera and microphone access when prompted
5. **Leave Call**: Disconnect from the video room

### Creating New Rooms

- Enter a unique room name that hasn't been used before
- Share the room name with other participants

## Configuration

### Twilio Setup

1. **Create a Twilio Account**

   - Sign up at [twilio.com](https://twilio.com)
   - Navigate to the Console Dashboard

2. **Get Account Credentials**

   - Account SID: Found in Console Dashboard
   - Auth Token: Found in Console Dashboard

3. **Create API Key**

   - Go to Settings > API Keys
   - Create a new API Key
   - Save the SID and Secret securely

4. **Enable Video API**
   - Ensure Programmable Video is enabled in your account
   - Configure webhook URLs if needed
