import json
import os
import requests

def lambda_handler(event, context):
    # Get the GitHub token from environment variables
    token = os.getenv('GITHUB_TOKEN')
    print("Received event:", json.dumps(event))
    
    # Parse the input data from the event
    body = json.loads(event['body'])
    owner = body.get('owner')
    repo = body.get('repo')
    path = body.get('path', '')

    # GitHub API URL for fetching the contents of a repo
    url = f'https://api.github.com/repos/{owner}/{repo}/contents/{path}'
    print("hello")
    
    # GitHub API request headers
    headers = {
        'Authorization': f'token {token}',
        
    }
    
    try:
        # Make the API request to GitHub
        response = requests.get(url, headers=headers)
        # response.raise_for_status()  # Raise an error for non-2xx responses
        
        # Return the fetched data
        data = response.json()
        return {
            'statusCode': 200,
            'body': json.dumps(data)
        }
        
    except requests.exceptions.RequestException as e:
        # Handle any errors with the request
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }