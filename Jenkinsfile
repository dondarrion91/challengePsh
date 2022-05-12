pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
