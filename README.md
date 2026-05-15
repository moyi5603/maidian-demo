# 埋点数据明细表 - 优化版

## 项目简介

本项目是DataEase埋点数据明细表的优化版本，提供更清晰、更高效的用户行为数据查看和分析体验。

## 在线预览

👉 [点击查看在线演示](https://moyi5603.github.io/maidian-demo/)

## 功能特性

### 1. 元素数据看板
- 按单个元素维度展示曝光、点击、CTR等核心指标
- 支持列排序（曝光次数、点击次数、点击率、曝光人数）
- 点击率可视化进度条
- 汇总卡片展示整体数据概览

### 2. 事件明细表
- 详细的埋点事件记录展示
- JSON数据弹窗查看（语法高亮）
- 分页浏览支持

### 3. 全局筛选
- 租户筛选（支持输入搜索）
- 组件名称筛选
- 上报时间范围筛选
- 用户ID精确匹配

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 优化版埋点数据明细表页面 |
| `埋点数据明细表-PRD.md` | 产品需求文档 |
| `README.md` | 项目说明文档 |

## 技术栈

- HTML5
- CSS3 (CSS Variables)
- Vanilla JavaScript

## 本地运行

直接在浏览器中打开 `index.html` 文件即可查看效果。

```bash
# 或使用本地服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 设计规范

### 色彩系统
- 主色: #4F6EF7
- 成功色: #34C759
- 背景色: #F5F7FA
- 卡片色: #FFFFFF

### 字体
- 系统字体栈: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei'

## 浏览器兼容

- Chrome (最新2个版本)
- Firefox (最新2个版本)
- Safari (最新2个版本)
- Edge (最新2个版本)

## 作者

优化设计：基于DataEase原始埋点数据明细表改进

## 许可证

MIT License
