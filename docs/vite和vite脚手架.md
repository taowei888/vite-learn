# Vite 与 Vite 脚手架的区别详解

## 参考文档
- [Vite 官方文档 - 搭建第一个 Vite 项目](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

## 核心概念区分

### 常见误区
很多开发者会混淆 **Vite** 和 **create-vite**，认为使用 `yarn create vite` 构建项目的过程就是 Vite 在做的事情。

### 实际关系

当我们执行 `yarn create vite` 时：
1. 全局安装 `create-vite`（Vite 的脚手架工具）
2. 运行 `create-vite` bin 目录下的执行配置

**关键理解：**
- `create-vite` **内置了** `vite`
- 类似于 `vue-cli` 内置了 `webpack`

## 技术栈对比

| 脚手架工具 | 内置构建工具 | 开发团队 |
|-----------|-------------|----------|
| vue-cli   | webpack     | Vue 团队 |
| create-vite | vite       | Vue 团队 |

## 学习建议

### 为什么要从 Vite 开始学习？

虽然 Vue 团队希望弱化 Vite 的存在感，但学习时我们**不能弱化**对 Vite 的理解。

我们暂时不使用 `yarn create vite my-vue-app --template vue`，而是从基础的 Vite 配置开始学习。

## 生动比喻：装修房子

### 毛坯房 vs 精装修

- **毛坯房**（手动搭建项目）
  - 需要自己下载：vite、vue、postcss、less、babel 等
  - 需要手动配置各种工具

- **精装修房**（使用脚手架）
  - `vue-cli/create-react-app`：提供已配置好的模板
  - `create-vite`：提供预设的最佳实践配置

### 脚手架的价值

脚手架工具（开发商）为我们提供：
1. ✅ 预装必要依赖
2. ✅ 最佳实践配置
3. ✅ 开箱即用的开发环境

## 总结

- **Vite** = 构建工具（核心）
- **create-vite** = 脚手架工具（包装器）
- 学习顺序：先理解 Vite，再使用 create-vite