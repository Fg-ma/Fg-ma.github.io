from flask import request
from flask import jsonify
from flask import Flask

app = Flask(__name__)


@app.route('/', methods=['POST'])
def index():
    item = request.get_json(force=True)
    specific_item = item['item']
    response = {
        'thing': specific_item
    }

    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
