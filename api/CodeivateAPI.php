<?php
/**
 * User: Danae
 * Date: 14/06/14
 * Time: 6:50 PM
 */

require_once 'API.class.php';

class CodeivateAPI extends API
{
    private $source = 'http://codeivate.com/users/Danae.json';
    private $response = array();

    public function __construct($request, $origin)
    {
        parent::__construct($request);

        // Get the server response
        $response = file_get_contents($this->source);

        if ($response) {
            $this->response = json_decode($response, true);
        }
    }

    /**
     * languages endpoint
     */
    protected function languages()
    {
        if ($this->method == 'GET') {
            if (isset($this->response['languages'])) {

                $languages = $this->response['languages'];

                return json_encode($languages);
            }
        } else {
            return $this->response('The "languages" endpoint only accepts GET requests', 405);
        }
    }
}

