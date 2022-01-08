package controller

import (
	"fmt"
	"github.com/gin-gonic/gin"
	uuid2 "github.com/google/uuid"
	"github.com/miyaUU/v2board-card/config"
	"github.com/miyaUU/v2board-card/database"
	"github.com/miyaUU/v2board-card/model"
	"github.com/miyaUU/v2board-card/utils"
	"net/http"
	"time"
)

type CardController struct{}

func (card *CardController) Verify(ctx *gin.Context) {
	var conf config.Config
	c := conf.GetConfig()
	var coupon model.Coupon
	var plan model.Plan
	_ = ctx.BindJSON(&coupon)

	if coupon.Code == "" {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "兑换码不得为空",
		})
		return
	}

	DB := database.GetDB()
	DB.Where("code = ?", coupon.Code).First(&coupon)
	if coupon.Id <= 0 {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "兑换码无效",
		})
		return
	} else if coupon.Type != 1 {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "兑换码类型无法使用",
		})
		return
	} else if coupon.LimitUse <= 0 {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "兑换码已被使用",
		})
		return
	} else if coupon.EndedAt < time.Now().Unix() || coupon.StartedAt > time.Now().Unix() {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "兑换码不在有效期",
		})
		return
	}

	DB.Where("id = ?", coupon.LimitPlanIds).First(&plan)
	if plan.Id <= 0 {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "兑换码暂无可兑订阅",
		})
		return
	}

	uuid := uuid2.New()
	email := fmt.Sprintf("%s%d@uucard.com", coupon.Code, time.Now().Unix())
	password := utils.PasswordHash(c.Service.Password)
	token := utils.GenerateToken(email)

	switch coupon.Value {
	case plan.MonthPrice:
		NewUser := UUNewUser(email, password, uuid, token, coupon.LimitPlanIds, plan.GroupId, plan.TransferEnable, 86400*30)
		DB.Create(&NewUser)
		DB.Model(&coupon).Update("limit_use", 0)
		Response(ctx, NewUser)

	case plan.QuarterPrice:
		NewUser := UUNewUser(email, password, uuid, token, coupon.LimitPlanIds, plan.GroupId, plan.TransferEnable, 86400*90)
		DB.Create(&NewUser)
		DB.Model(&coupon).Update("limit_use", 0)
		Response(ctx, NewUser)

	case plan.HalfYearPrice:
		NewUser := UUNewUser(email, password, uuid, token, coupon.LimitPlanIds, plan.GroupId, plan.TransferEnable, 86400*180)
		DB.Create(&NewUser)
		DB.Model(&coupon).Update("limit_use", 0)
		Response(ctx, NewUser)

	case plan.YearPrice:
		NewUser := UUNewUser(email, password, uuid, token, coupon.LimitPlanIds, plan.GroupId, plan.TransferEnable, 86400*360)
		DB.Create(&NewUser)
		DB.Model(&coupon).Update("limit_use", 0)
		Response(ctx, NewUser)

	case plan.TwoYearPrice:
		NewUser := UUNewUser(email, password, uuid, token, coupon.LimitPlanIds, plan.GroupId, plan.TransferEnable, 86400*720)
		DB.Create(&NewUser)
		DB.Model(&coupon).Update("limit_use", 0)
		Response(ctx, NewUser)

	case plan.ThreeYearPrice:
		NewUser := UUNewUser(email, password, uuid, token, coupon.LimitPlanIds, plan.GroupId, plan.TransferEnable, 86400*1080)
		DB.Create(&NewUser)
		DB.Model(&coupon).Update("limit_use", 0)
		Response(ctx, NewUser)
	default:
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "未知订阅周期",
		})
	}

}

func (card *CardController) Query(ctx *gin.Context) {
	var user model.User
	var conf config.Config
	c := conf.GetConfig()
	_ = ctx.BindJSON(&user)
	if user.Token == "" {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "查询码不得为空",
		})
		return
	}
	DB := database.GetDB()
	DB.Where("token = ?", user.Token).First(&user)

	if user.Id <= 0 {
		ctx.JSON(http.StatusOK, gin.H{
			"code":    0,
			"message": "该用户不存在",
		})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"code": 1,
		"data": gin.H{
			"token":           user.Token,
			"subscribe_url":   fmt.Sprintf("%s/api/v1/client/subscribe?token=%s", c.Service.SubUrl, user.Token),
			"expired_at":      user.ExpiredAt,
			"u":               user.U,
			"d":               user.D,
			"s":               user.TransferEnable - (user.U + user.D),
			"transfer_enable": user.TransferEnable,
		},
	})
}

func UUNewUser(email string, password string, uuid uuid2.UUID, token string, planId uint, groupID uint, transferEnable int64, expireAt int64) model.User {
	user := model.User{
		Email:          email,
		Password:       password,
		Uuid:           uuid,
		Token:          token,
		PlanId:         planId,
		GroupId:        groupID,
		TransferEnable: transferEnable * 1024 * 1024 * 1024,
		ExpiredAt:      time.Now().Unix() + expireAt,
		CreatedAt:      time.Now().Unix(),
		UpdatedAt:      time.Now().Unix(),
	}
	return user
}

func Response(ctx *gin.Context, data model.User) {
	var conf config.Config
	c := conf.GetConfig()
	ctx.JSON(http.StatusOK, gin.H{
		"code": 1,
		"data": gin.H{
			"token":           data.Token,
			"subscribe_url":   fmt.Sprintf("%s/api/v1/client/subscribe?token=%s", c.Service.SubUrl, data.Token),
			"expired_at":      data.ExpiredAt,
			"transfer_enable": data.TransferEnable,
			"u":               data.U,
			"d":               data.D,
			"s":               data.TransferEnable - (data.U + data.D),
		},
	})
}
