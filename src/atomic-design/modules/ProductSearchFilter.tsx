const ProductSearchFilter = () => {
  return (
    <div className="card mb-12 p-4 mb-4">
      <div className="input-group">
        <button type="button" className="btn btn-outline-primary">
          جستجوی کالاها
        </button>
        <button
          type="button"
          className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">نمایش منوی کشویی</span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              عمل
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              عمل دیگر
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              یک عمل دیگر
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              لینک جدا شده
            </a>
          </li>
        </ul>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          placeholder="نام کالای مورد نظر را وارد کنید"
        />
      </div>
    </div>
  );
};


export default ProductSearchFilter