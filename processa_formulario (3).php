<?php
// Define o fuso horário para garantir que os horários de registro estejam corretos
date_default_timezone_set('America/Sao_Paulo');

// Caminho para o arquivo de log do webhook
$log_file = 'webhook_debug.log';

// Função para adicionar mensagens ao log
function log_message($message, $log_file) {
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}

// Define o cabeçalho para indicar que a resposta será JSON
header('Content-Type: application/json');

// Verifica se a requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta e sanitiza os dados do formulário
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $whatsapp_link_base = isset($_POST['whatsapp_link']) ? htmlspecialchars(trim($_POST['whatsapp_link'])) : '';

    log_message("Formulário recebido: Nome: $name, Email: $email, Telefone: $phone", $log_file);

    // --- Lógica para identificar a plataforma de conversão ---
    $conversion_platform = 'Direto/Orgânico'; // Valor padrão

    // Verifica se os parâmetros de clique do Google Ads (gclid) ou Meta Ads (fbclid) foram enviados via POST
    if (isset($_POST['fbclid']) && !empty($_POST['fbclid'])) {
        $conversion_platform = 'Meta Ads (Facebook/Instagram)';
        log_message("fbclid detectado: " . $_POST['fbclid'], $log_file);
    } elseif (isset($_POST['gclid']) && !empty($_POST['gclid'])) {
        $conversion_platform = 'Google Ads';
        log_message("gclid detectado: " . $_POST['gclid'], $log_file);
    }
    log_message("Plataforma de Conversão identificada: " . $conversion_platform, $log_file);
    // --- Fim da lógica de identificação da plataforma ---

    // Validação básica
    if (empty($name) || empty($email) || empty($phone) || empty($whatsapp_link_base)) {
        $response = ['status' => 'error', 'message' => 'Por favor, preencha todos os campos obrigatórios.'];
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = ['status' => 'error', 'message' => 'Por favor, insira um email válido.'];
    } else {
        // Constrói a URL do WhatsApp com o nome do usuário
        $whatsapp_message = urlencode("Olá, meu nome é {$name} e tenho interesse no Curso Livre de Teologia Ministerial da FATEMI!");
        $whatsapp_url = $whatsapp_link_base . "?text=" . $whatsapp_message;

        // Dados para enviar ao webhook
        $webhook_data = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'conversion_platform' => $conversion_platform, // Adicionado o campo da plataforma
            'timestamp' => date('Y-m-d H:i:s')
        ];

        // URL do seu webhook (SUBSTITUA PELA SUA URL REAL DO WEBHOOK)
        $webhook_url = 'https://app.ummense.com/incoming-webhook/6b3c18aa-aa8c-4859-8c10-4f3d7f8b46d8'; // Ex: 'https://seuservidor.com/webhook-receiver.php'

        // Envia os dados para o webhook
        $ch = curl_init($webhook_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($webhook_data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        $webhook_response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // Verifica se o envio para o webhook foi bem-sucedido (código 2xx)
        if ($http_code >= 200 && $http_code < 300) {
            $response = [
                'status' => 'success',
                'message' => 'Formulário enviado com sucesso!',
                'whatsapp_url' => $whatsapp_url
            ];
        } else {
            // Se o webhook falhou, ainda podemos redirecionar para o WhatsApp
            // mas registramos o erro para depuração
            error_log("Erro ao enviar para o webhook. HTTP Code: {$http_code}, Response: {$webhook_response}");
            $response = [
                'status' => 'success', // Ainda consideramos sucesso para o usuário, mas com aviso interno
                'message' => 'Formulário enviado, mas houve um problema ao registrar a conversão. Por favor, tente novamente.',
                'whatsapp_url' => $whatsapp_url
            ];
        }
    }
} else {
    // Se alguém tentar acessar o script diretamente sem enviar o formulário
    log_message("Acesso direto ao processa_formulario.php sem POST.", $log_file);
    // Em caso de acesso direto sem POST, retorna um erro JSON
    echo json_encode(['status' => 'error', 'message' => 'Requisição inválida.']);
    exit();
}

echo json_encode($response);
?>
