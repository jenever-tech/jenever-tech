+++
fragment = "config"

[[config]]
  type = "js"
  block = true
  resource = "counter.js"

[[config]]
  type = "css"
  block = true
  resource = "counter.css"

[[config]]
  type = "js"
  block = true
  html = """
    <script>
      var partners = [
        {
          'name': 'Carol - xxxxxx',
          'quotation': 'RRRRRRRRRRRRRRRRR',
          'image_url': 'http://192.168.11.130:1313/images/logo.svg'
        }
      ]
    </script>
  """
+++
