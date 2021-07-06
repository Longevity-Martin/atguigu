#一、常用命令：

* mkdir XX：创建一个空目录 XX指目录名
* pwd：显示当前目录的路径
* cat xx：查看xx文件内容
* <font color=red>git init：把当前的目录变成可以管理的git仓库，生成隐藏的.git文件夹</font>
* <font color=red>git add xx：把xx文件添加到暂存区</font>
* <font color=red>git commit -m “xx”：提交文件 -m后面的是注释，必须写！</font>
* git status：查看仓库状态
* git log：查看历史记录
* git reset --hard HEAD^：往上回退一个版本
* git reflog：查看历史记录的版本号id
* git checkout -- xx：把xx文件在工作区的修改全部撤销
* git rm xx：删除xx文件
* <font color=red>git remote add origin https://github.com/xxxxx/a.git 关联一个远程库</font>
* <font color=red>git push -u（第一次尽量加上-u，以后不用）origin master：把当前master分支推送到远程库</font>
* <font color=red>git clone https://github.com/xxxxx   从远程库中克隆</font>
* <font color=red>git checkout -b dev：创建dev分支 并切换到dev分支上</font>
* <font color=red>git branch：查看当前所有的分支</font>
* <font color=red>git checkout master：切换回master分支</font>
* <font color=red>git merge dev：在当前分支合并dev分支</font>
* git branch -d dev：删除dev分支
* <font color=red>git branch xxx：创建分支xxx</font>
* git remote：查看远程库信息
* git remote -v查看远程库的详细信息
* <font color=red>git pull origin master 将远程库的更新拉取到本地并自动合并</font>
* <font color=red>git push origin master：git会把master分支推送到远程库对应的分支上</font>