import server from './config/app'
import env from './config/env'

server.listen(env.baseConfig.port, () => {
  console.log(`Server running on ${env.baseConfig.host}:${env.baseConfig.port}`)
})
