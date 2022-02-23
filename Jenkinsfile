pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'mkdir ~/.npm-global'
                sh "npm config set prefix '~/.npm-global'"
                sh "export PATH=~/.npm-global/bin:$PATH"
                sh 'npm install'
            }
        }
    }
}