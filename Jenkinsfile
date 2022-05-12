pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('Initialize docker'){
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
