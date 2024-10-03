import requests
import json

def lambda_handler(event, context=None):
    # Get the username from the event
    user_name = event.get("username")
    
    if not user_name:
        return {"error": "Username not provided!"}
    
    print(f"Fetching Medium feed for: {user_name}")
    
    # Fetch the feed for the given Medium username
    try:
        response = requests.get(f"https://medium.com/feed/@{user_name}")
        response.raise_for_status()  # Raise an error for bad status codes
        print(response.text)  # Print feed data for debugging
        
        return {"status": "success", "data": response.text}
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching feed: {e}")
        return {"status": "failure", "error": str(e)}

