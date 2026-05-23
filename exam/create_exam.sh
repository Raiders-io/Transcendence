
BASE_URL="http://localhost:3333"

echo "Creating exam..."

EXAM_RESPONSE=$(curl -s -X POST "$BASE_URL/authoring/exams" \
  -H "Content-Type: application/json" \
  -d '{"title":"Alphabet"}')

echo "Exam response:"
echo "$EXAM_RESPONSE"

EXAM_ID=$(echo "$EXAM_RESPONSE" | jq -r '.id')

echo ""
echo "Extracted exam id: $EXAM_ID"

echo ""
echo "Creating question..."

QUESTION_RESPONSE=$(curl -s -X POST "$BASE_URL/authoring/exams/$EXAM_ID/questions" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "What is the first letter of the latin alphabet?",
    "question_type": 2,
	"good_answers": ["a", "A"]
  }')

echo "Question response:"
echo "$QUESTION_RESPONSE"

echo ""
echo "== Done =="
