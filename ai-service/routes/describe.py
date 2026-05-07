from flask import Blueprint, request, jsonify
from services.groq_client import generate_response
from datetime import datetime
import json

describe_bp = Blueprint("describe", __name__)

@describe_bp.route("/describe", methods=["POST"])
def describe():
    data = request.get_json()

    # ✅ 1. VALIDATION
    if not data or "input" not in data:
        return jsonify({"error": "Input is required"}), 400

    user_input = data["input"]

    # ✅ 2. LOAD PROMPT
    with open("prompts/describe.txt", "r") as f:
        prompt_template = f.read()

    prompt = prompt_template.replace("{input}", user_input)

    # ✅ 3. CALL AI
    ai_response = generate_response(prompt)

    if ai_response is None:
        return jsonify({"error": "AI service failed"}), 500

    # ✅ 4. PARSE JSON (IMPORTANT)
    try:
        parsed = json.loads(ai_response)
    except:
        return jsonify({"error": "Invalid AI response"}), 500

    # ✅ 5. RETURN FINAL RESPONSE
    return jsonify({
        "description": parsed.get("description"),
        "insights": parsed.get("insights"),
        "generated_at": datetime.utcnow().isoformat()
    })