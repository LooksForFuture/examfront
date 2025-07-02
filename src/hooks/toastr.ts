import { useCallback } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const useToastr = () => {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
    timeOut: 5000,
    extendedTimeOut: 1000,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };

  type ToastrFunction = (message: string, title?: string) => void;

  const success: ToastrFunction = useCallback((message, title) => {
    toastr.success(message, title);
  }, []);

  const error: ToastrFunction = useCallback((message, title) => {
    toastr.error(message, title);
  }, []);

  const info: ToastrFunction = useCallback((message, title) => {
    toastr.info(message, title);
  }, []);

  const warning: ToastrFunction = useCallback((message, title) => {
    toastr.warning(message, title);
  }, []);

  return { success, error, info, warning };
};

export default useToastr;
