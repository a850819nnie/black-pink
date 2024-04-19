function showContent(sectionId) {
    var mainContent = document.getElementById('main-content');
    
    if (mainContent) {
        var sections = mainContent.children;

        for (var i = 0; i < sections.length; i++) {
            if (sections[i].id === sectionId) {
                sections[i].style.display = 'block';
            } else {
                sections[i].style.display = 'none';
            }
        }
    } else {
        console.error("Main content element not found.");
    }
}
window.onload = function() {
    showContent('about');
    }
    document.getElementById("reservation-form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var name = document.getElementById("name").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var guests = document.getElementById("guests").value;
        var gender = "";
    
        // 获取性别信息
        if (document.getElementById("male").checked) {
            gender = "先生";
        } else if (document.getElementById("female").checked) {
            gender = "女士";
        } else {
            gender = "未指定";
        }
    
        var message = document.getElementById("message");
    
        // 这里可以添加进一步的验证逻辑
    
        // 这里简单地将预约信息显示在页面上
        message.innerHTML = "姓名：" + name + "<br>" +
                            "日期：" + date + "<br>" +
                            "時間：" + time + "<br>" +
                            "人數：" + guests + "<br>" +
                            "性別：" + gender + "<br>" +
                            "預約成功！感謝您的光臨！";
    
        // 显示感谢消息弹窗
        alert("您的預約已完成! 感謝您的光臨!");
    });
    function toggleMenu(categoryId) {
        var menuItems = document.getElementById(categoryId).getElementsByClassName("menu-items")[0];
        if (menuItems.classList.contains("hidden")) {
            menuItems.classList.remove("hidden"); // 显示菜单项
        } else {
            menuItems.classList.add("hidden"); // 隐藏菜单项
        }
    }
    
    function toggleSubMenu(subCategoryId) {
        var subMenuItems = document.getElementById(subCategoryId);
        if (subMenuItems.classList.contains("hidden")) {
            subMenuItems.classList.remove("hidden"); // 显示子菜单项
        } else {
            subMenuItems.classList.add("hidden"); // 隐藏子菜单项
        }
    }
    