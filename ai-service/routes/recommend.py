from flask import Blueprint, request, jsonify
from services.groq_client import generate_response
import json

recommend_bp = Blueprint("recommend", __name__)

@recommend_bp.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()

    # ✅ VALIDATION
    if not data or "input" not in data:
        return jsonify({"error": "Input is required"}), 400

    user_input = data["input"]

    # ✅ LOAD PROMPT
    with open("prompts/recommend.txt", "r") as f:
        prompt_template = f.read()

    prompt = prompt_template.replace("{input}", user_input)

    # ✅ CALL AI
    ai_response = generate_response(prompt)

    if ai_response is None:
        return jsonify({"error": "AI service failed"}), 500

    # ✅ PARSE JSON
    try:
        parsed = json.loads(ai_response)
    except:
        return jsonify({"error": "Invalid AI response"}), 500

    return jsonify(parsed)