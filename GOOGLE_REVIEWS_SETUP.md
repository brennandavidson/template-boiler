# Google Reviews Setup Guide

This project uses `react-google-reviews` to display real Google reviews on your website.

## Quick Setup (Recommended - Free)

The easiest way to get started is using Featurable's free API service:

### Step 1: Create a Featurable Account

1. Go to [https://featurable.com](https://featurable.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create a Widget

1. After logging in, click "Create Widget"
2. Select "Google Reviews" as the source
3. Enter your Google Business Profile URL or the share link:
   - Use the share link you have: `https://share.google/S1AI6rURAAtxKWcYv`
   - OR find your business on Google Maps and copy the URL
4. Customize the widget settings (optional):
   - Number of reviews to display
   - Review sorting (newest, highest rated, etc.)
   - Display style

### Step 3: Get Your Widget ID

1. Once your widget is created, go to the widget settings
2. Copy the "Widget ID" (it will look like: `abcd1234-ef56-7890-ghij-klmnopqrstuv`)

### Step 4: Add Widget ID to Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_FEATURABLE_WIDGET_ID=your-widget-id-here
   ```
3. Replace `your-widget-id-here` with the Widget ID you copied
4. Save the file
5. Restart your development server

### Step 5: Verify It Works

1. Go to any page with the Reviews section (homepage, contact page, or `/reviews`)
2. You should now see your real Google reviews instead of the placeholder message

## Alternative Setup: Google Places API (Advanced)

If you prefer to use the Google Places API directly:

###  Step 1: Get Your Google Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for your business
3. Copy the Place ID (starts with "ChIJ...")

### Step 2: Get a Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Places API"
4. Create credentials > API Key
5. Restrict the API key to your domain (recommended for security)

### Step 3: Add to Environment Variables

Add these to your `.env.local` file:
```
NEXT_PUBLIC_GOOGLE_PLACE_ID=your-place-id-here
NEXT_PUBLIC_GOOGLE_API_KEY=your-api-key-here
```

**Note**: This method requires a Google Cloud Platform account and may incur costs depending on usage.

## Troubleshooting

### Reviews Not Showing

1. **Check environment variables**: Make sure `NEXT_PUBLIC_FEATURABLE_WIDGET_ID` is set in `.env.local`
2. **Restart dev server**: After adding environment variables, restart your dev server
3. **Check widget status**: Log in to Featurable and verify your widget is active
4. **Check browser console**: Look for any error messages

### Setup Message Still Showing

If you see the blue setup message instead of reviews:

1. Verify the environment variable name is exactly: `NEXT_PUBLIC_FEATURABLE_WIDGET_ID`
2. Make sure there are no extra spaces in the `.env.local` file
3. Restart your development server completely

## Support

- Featurable Documentation: [https://featurable.com/docs](https://featurable.com/docs)
- React Google Reviews GitHub: [https://github.com/Featurable/react-google-reviews](https://github.com/Featurable/react-google-reviews)
