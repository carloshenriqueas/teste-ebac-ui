pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/carloshenriqueas/teste-ebac-ui.git'
            }
        }
        
        stage('Instalar dependências') {
            steps {
                powershell 'npm install'
            }
        }
        
        stage('Executar Testes') {
            steps {
                powershell 'npm run cy:run'
            }
        }
    }
}