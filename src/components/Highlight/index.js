import Prism from 'prismjs'
import React, { useEffect } from 'react'

import '../../../node_modules/prismjs/components/prism-sql'
import '../../../node_modules/prismjs/components/prism-yaml'
import '../../../node_modules/prismjs/themes/prism-okaidia.css'

export default ({ language, children }) => {
  useEffect(() => Prism.highlightAll(), [])

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}
