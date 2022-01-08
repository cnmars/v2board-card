package config

import (
	"fmt"
	"gopkg.in/yaml.v2"
	"io/ioutil"
)

type Config struct {
	Database Database
	Service  Service
}

type Database struct {
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	Name     string `yaml:"name"`
	Username string `yaml:"username"`
	Password string `yaml:"password"`
}

type Service struct {
	Port     int    `yaml:"port"`
	Password string `yaml:"password"`
	SubUrl   string `yaml:"subscribe_url"`
}

func (c *Config) GetConfig() *Config {
	yamlFile, err := ioutil.ReadFile("v2board-card.yaml")
	if err != nil {
		panic(fmt.Sprintf("打开配置文件错误...\n错误信息:%s", err))
	}
	if err = yaml.Unmarshal(yamlFile, c); err != nil {
		panic(fmt.Sprintf("配置文件解析错误... \n错误信息:%s", err))
	}
	return c
}
