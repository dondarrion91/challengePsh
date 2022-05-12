pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
         stage('Deploy') {
            steps {
                sh 'chmod +x ./flakey-deploy.sh'
                retry(3) {
                    sh './flakey-deploy.sh'
                }
                sh 'chmod +x ./health-check.sh'
                timeout(time: 3, unit: 'MINUTES') {
                    sh './health-check.sh'
                }
            }
        }
    }
}
