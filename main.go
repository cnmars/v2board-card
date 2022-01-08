package main

import (
	"github.com/miyaUU/v2board-card/database"
	"github.com/miyaUU/v2board-card/routes"
)

func main() {
	database.InitDB()
	routes.RunRoute()
}
