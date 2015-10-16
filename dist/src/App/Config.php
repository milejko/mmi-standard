<?php

/**
 * Mmi Framework (https://github.com/milejko/mmi.git)
 * 
 * @link       https://github.com/milejko/mmi.git
 * @copyright  Copyright (c) 2010-2014 Mariusz Miłejko (http://milejko.com)
 * @license    http://milejko.com/new-bsd.txt New BSD License
 */

namespace App;

/**
 * Ogólna konfiguracja aplikacji
 */
class Config extends \Mmi\App\KernelConfig {

	/**
	 * Inicjalizacja konfiguracji
	 */
	public function __construct() {

		//konfiguracja bufora
		$this->cache = new \Mmi\Cache\CacheConfig;

		//konfiguracja bazy danych
		$this->db = new \Mmi\Db\DbConfig;

		//ustawienia loggera
		$this->log = new \Mmi\Log\LogConfig;

		//ustawienia routera
		$this->router = new \Mmi\Mvc\RouterConfig;

		//konfiguracja sesji
		$this->session = new \Mmi\Session\SessionConfig;
	}

}
