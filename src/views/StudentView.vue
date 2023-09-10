<!-- 模版 -->
<template>
    <el-container>
        <!-- 顶栏 -->
        <el-header style="font-size:36px;background-color: #eff1f8">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark"><i class="el-icon-user-solid" color="white"></i>学生管理系统</div>
                </el-col>
            </el-row>
        </el-header>

        <el-container>
            <!-- 导航栏 -->
            <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>学生信息管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/student">学生基本信息</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link to="/about">关于</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <!-- 表格 -->
            <el-main>
                <!-- 搜索栏 -->
                <el-form :inline="true" :model="searchForm" label="left" class="searchForm">
                    <el-form-item>
                        <el-input v-model="searchForm.no" placeholder="学号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="searchForm.gender" placeholder="性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-date-picker v-model="searchForm.entryDate" type="daterange" range-separator="至"
                            start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearchStudent">搜索</el-button>
                    </el-form-item>
                </el-form>
                <!-- 表格 -->
                <el-table :data="tableData" style="width: 100%;">
                    <el-table-column type="index" label="序号" width="60"></el-table-column>
                    <!-- <el-table-column prop="id" label="序号" width="60">
                        <template slot-scope="scope">
                            <span>{{ (pageNum - 1) * pageSize + scope.$index + 1 }}</span>
                        </template>
                    </el-table-column> -->
                    <el-table-column prop="no" label="学号" width="120"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="90"></el-table-column>
                    <el-table-column prop="class" label="班级" width="120"></el-table-column>
                    <el-table-column prop="gender" label="性别" :formatter="genderFormate" width="60">
                    </el-table-column>
                    <el-table-column prop="entryDate" label="入学日期" width="120"></el-table-column>
                    <el-table-column prop="contact" label="联系方式" width="150"></el-table-column>
                    <el-table-column prop="address" label="地址" width="300"></el-table-column>
                    <el-table-column label="操作">
                        <el-button type="primary" size="mini" @click="onEditStudent">编辑</el-button>
                        <el-button type="danger" size="mini" @click="onDeleteStudent">删除</el-button>
                    </el-table-column>
                </el-table>

                <!-- Pagination分页 -->
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background
                    layout="sizes, prev, pager, next, jumper, total" :total="pageForm.total">
                </el-pagination>
            </el-main>
        </el-container>
    </el-container>
</template>

<!-- 脚本 -->
<script>
export default {
    data() {
        const item = {
            'no': 'SA20225525',
            'name': '王小虎',
            'class': '大数据3班',
            'gender': 1,
            'entryDate': '2020-09-01',
            'contact': '18823456789',
            'address': '上海市普陀区金沙江路 1518 弄',
        };
        return {
            pageNum: 1,
            pageSize: 10,
            tableData: Array(10).fill(item),
            genderFormate(row) {
                if (row.gender == 1) return "男"
                else if (row.gender == 0) return "女"
                else return "未知"
            },
            // 搜索栏
            searchForm: {
                'no': '',
                'name': '',
                'gender': '',
                'entryDate': '',
            },
            // 分页
            pageForm: {
                total: 56,
            }
        }
    },
    methods: {
        // 搜索
        onSearchStudent() {
            console.log("搜索");
        },
        // 分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 编辑
        onEditStudent() {

        },
        // 删除
        onDeleteStudent() {

        }
    },
}
</script>

<!-- 样式 -->
<style>
.el-container {
    height: 800px;
    border: 1px solid #ffffff;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    padding: 0;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}

.el-pagination {
    margin-top: 5px;
}

a:-webkit-any-link {
    color: rgb(84, 84, 84);
    cursor: pointer;
    text-decoration: none;
}
</style>