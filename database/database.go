package database

import (
	"fmt"
	"github.com/miyaUU/v2board-card/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"time"
)

var DB *gorm.DB

func InitDB() *gorm.DB {
	var c config.Config
	c.GetConfig()
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%v)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		c.Database.Username,
		c.Database.Password,
		c.Database.Host,
		c.Database.Port,
		c.Database.Name)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			TablePrefix:   "v2_",
			SingularTable: true,
		},
	})

	if err != nil {
		panic(fmt.Sprintf("连接数据库失败... \n错误信息: %v", err))
	}

	sqlDB, _ := db.DB()
	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)
	sqlDB.SetConnMaxLifetime(10 * time.Second)

	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB
}
