package routes

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/miyaUU/v2board-card/config"
	"github.com/miyaUU/v2board-card/controller"
	"github.com/miyaUU/v2board-card/middleware"
)

func RunRoute() {
	var card controller.CardController
	var conf config.Config
	conf.GetConfig()

	gin.SetMode(gin.ReleaseMode)

	r := gin.New()

	r.Use(gin.Recovery(), middleware.Cors())
	v1 := r.Group("/api/v1/card")
	{
		v1.POST("/verify", card.Verify)
		v1.POST("/query", card.Query)
	}

	fmt.Println(fmt.Sprintf(`  
       .---_
      / / /\|
     / / | \ *
    /  /  \ \
   / /  / \  \
 ./~~~~~~~~~~~\.
( .",^. -". '.~ )
 '~~~~~~~~~~~~~'    启动成功..... v1.0.1  api服务端口:%d`, conf.Service.Port))
	if conf.Service.Port <= 0 {
		if err := r.Run(":8080"); err != nil {
			panic(fmt.Sprintf("route error:%s", err))
		}
	}

	if err := r.Run(fmt.Sprintf(":%d", conf.Service.Port)); err != nil {
		panic(fmt.Sprintf("route error:%s", err))
	}
}
