import React from "react";

function Note() {
  return (
    <div className="mt-5">
      <textarea
        className="w-full text-light-primary-600/80 border border-light-primary-300 focus:border-red-primary-500 rounded-md outline-none p-2"
        placeholder="یادداشت شما ..."
        rows={5}
      ></textarea>
      <span className="text-light-primary-600/80 text-xs">
        یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.
      </span>
    </div>
  );
}

export default Note;
