// C:\lamviec\ThietKeReact\my-app\public\assets\js\search-programs.js
/* global $ */
window.initCategorySelect = function (data) {
  // eslint-disable-next-line
  const formattedData = data.map((item) => ({
    id: item.id,
    text: item.label,
    count: item.count,
  }));

  $("#category-select").select2({
    data: formattedData,
    placeholder: "Category",
    allowClear: true,
    templateResult: function (state) {
      if (!state.id) return state.text;

      // Tạo giao diện có số count bên phải
      var $state = $(
        '<div style="display: flex; justify-content: space-between;">' +
          "<span>" +
          state.text +
          "</span>" +
          (state.count !== null
            ? '<span style="color: #999; background: #eee; padding: 0 6px; border-radius: 4px; font-size: 12px;">' +
              state.count +
              "</span>"
            : "") +
          "</div>",
      );
      return $state;
    },
  });
};
