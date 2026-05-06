from flask import Flask, jsonify, request
import time

app = Flask(__name__)

START_TIME = time.time()


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "AI service is running",
        "service": "ai-service",
        "status": "UP"
    }), 200


@app.route("/health", methods=["GET"])
def health():
    uptime_seconds = int(time.time() - START_TIME)

    return jsonify({
        "status": "UP",
        "service": "ai-service",
        "uptime_seconds": uptime_seconds
    }), 200


@app.route("/describe", methods=["POST"])
def describe():
    data = request.get_json(silent=True) or {}
    text = data.get("text", "")

    return jsonify({
        "description": f"Generated description for: {text}",
        "generated_at": int(time.time()),
        "is_fallback": True
    }), 200


@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json(silent=True) or {}
    text = data.get("text", "")

    return jsonify({
        "recommendations": [
            {
                "action_type": "review",
                "description": f"Review the input: {text}",
                "priority": "HIGH"
            },
            {
                "action_type": "improve",
                "description": "Improve clarity and completeness of the report.",
                "priority": "MEDIUM"
            },
            {
                "action_type": "follow_up",
                "description": "Assign owner and deadline for next action.",
                "priority": "LOW"
            }
        ],
        "is_fallback": True
    }), 200


@app.route("/generate-report", methods=["POST"])
def generate_report():
    data = request.get_json(silent=True) or {}
    title = data.get("title", "Board Report")

    return jsonify({
        "title": title,
        "summary": "This is a fallback AI-generated summary.",
        "overview": "The report contains key management updates and recommended actions.",
        "key_items": [
            "Operational status reviewed",
            "Risks identified",
            "Next steps prepared"
        ],
        "recommendations": [
            "Track deadlines regularly",
            "Review pending items",
            "Prepare final board summary"
        ],
        "is_fallback": True
    }), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)