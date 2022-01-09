package model

import "github.com/google/uuid"

type User struct {
	Id             uint      `gorm:"primaryKey" json:"id"`
	Email          string    `json:"email"`
	Password       string    `json:"password"`
	U              int64     `json:"u"`
	D              int64     `json:"d"`
	Uuid           uuid.UUID `json:"uuid"`
	GroupId        uint      `json:"group_Id"`
	PlanId         string    `json:"plan_id"`
	TransferEnable int64     `json:"transfer_enable"`
	Token          string    `json:"token"`
	ExpiredAt      int64     `json:"expired_at"`
	CreatedAt      int64     `json:"created_at"`
	UpdatedAt      int64     `json:"updated_at"`
}

type Plan struct {
	Id             uint  `json:"id"`
	GroupId        uint  `json:"group_id"`
	TransferEnable int64 `json:"transfer_enable"`
	MonthPrice     uint  `json:"month_price"`
	QuarterPrice   uint  `json:"quarter_price"`
	HalfYearPrice  uint  `json:"half_year_price"`
	YearPrice      uint  `json:"year_price"`
	TwoYearPrice   uint  `json:"two_year_price"`
	ThreeYearPrice uint  `json:"three_year_price"`
	OnetimePrice   uint  `json:"onetime_price"`
}

type Coupon struct {
	Id           uint   `json:"id"`
	Code         string `json:"code"`
	Type         uint   `json:"type"`
	LimitUse     uint   `json:"limit_use"`
	LimitPlanIds string `json:"limit_plan_ids"`
	Value        uint   `json:"value"`
	StartedAt    int64  `json:"started_at"`
	EndedAt      int64  `json:"ended_at"`
}
