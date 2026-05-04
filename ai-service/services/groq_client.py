import os
from groq import Groq
from dotenv import load_dotenv

# FORCE LOAD ENV FROM ROOT
load_dotenv(dotenv_path="../.env")

api_key = os.getenv("GROQ_API_KEY")
print("🔑 API KEY:", api_key)   # 👈 DEBUG

client = Groq(api_key=api_key)

def generate_response(prompt):
    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except Exception as e:
        import traceback
        print("❌ FULL ERROR:")
        traceback.print_exc()   # 👈 THIS IS KEY
        return None