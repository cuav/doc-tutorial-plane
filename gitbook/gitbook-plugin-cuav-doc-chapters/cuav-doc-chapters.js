require(["gitbook"], function(gitbook) {
  var TOGGLE_CLASSNAME = "cuav-expanded";
  var CHAPTER_CLASSNAME = "chapter";
  var ARTICLES_CLASSNAME = "articles";

  /**
   * 初始化
   * @function
   */
  var init = function() {
    bindEvent();
    var activeChapters = document.getElementsByClassName("chapter active");
    if (activeChapters.length != 0) {
      expand(activeChapters[0]);
    }
  };

  /**`
   * 绑定事件
   * @function
   */
  var bindEvent = function() {
    var articleNodes = document.getElementsByClassName(ARTICLES_CLASSNAME);
    if (!articleNodes) {
      return;
    }

    var chapterNodes = [];
    var previous;
    for (var i = 0; i < articleNodes.length; ++i) {
      previous = articleNodes[i].previousElementSibling;
      if ((previous && previous.tagName == "A") || previous.tagName == "SPAN") chapterNodes.push(previous);
    }

    for (var i = 0; i < chapterNodes.length; ++i) {
      bindClickEvent(chapterNodes[i]);
    }
  };

  /**
   * 绑定目录点击事件
   * @function
   * @param  {Element} element  目录节点（<a>/<span>）
   */
  var bindClickEvent = function(element) {
    var eventElement;
    if (element.tagName == "SPAN") {
      eventElement = element;
    } else {
      var href = element.getAttribute("href");
      if (href && (href === "javascript:;" || href.startsWith("#"))) {
        eventElement = element;
      }
    }

    if (eventElement) {
      eventElement.addEventListener("click", function(event) {
        event.stopPropagation();
        event.stopPropagation();
        toggle(element.parentElement);
      });
    }

    var iElement = document.createElement("I");
    iElement.className = "cuav-trigger fa";
    iElement.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      toggle(element.parentElement);
    });

    element.appendChild(iElement);
  };

  /**
   * 展开、收起目录
   * @function
   * @param  {Element} element 目录节点
   */
  var toggle = function(element) {
    var classList = element.classList;
    if (classList.contains(TOGGLE_CLASSNAME)) {
      classList.remove(TOGGLE_CLASSNAME);
    } else {
      classList.add(TOGGLE_CLASSNAME);
    }
  };

  /**
   * 展开当前目录及其父目录
   * @function
   * @param  {Element} element 要展开的目录
   */
  var expand = function(element) {
    element.classList.add(TOGGLE_CLASSNAME);

    var elementParent = element.parentElement;
    var elementParentClassList = elementParent.classList;
    if (elementParentClassList.contains(CHAPTER_CLASSNAME) || elementParentClassList.contains(ARTICLES_CLASSNAME)) {
      // 递归展开父目录
      expand(elementParent);
    }
  };

  gitbook.events.bind("page.change", function() {
    init();
  });
});
