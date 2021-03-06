﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SFBR.Device.Domain.AggregatesModel.JobOrderAggregate
{
    /// <summary>
    /// 
    /// </summary>
    public class AuditMessage:SeedWork.Entity
    {
        /// <summary>
        /// 
        /// </summary>
        public string JobOrderId { get; set; }
        /// <summary>
        /// 审核内容
        /// </summary>
        public string AuditContent { get; set; }
        /// <summary>
        /// 审核时的状态
        /// </summary>
        public OrderStatus OrderStatus { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreationTime { get; set; }
        /// <summary>
        /// 审核人账号
        /// </summary>
        public string AuditAccountId { get; set; }
        /// <summary>
        /// 审核人姓名
        /// </summary>
        public string AuditName { get; set; }
    }
}
