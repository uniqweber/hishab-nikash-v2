import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-red-50 text-5xl font-medium capitalize">
      <div className="flex items-center gap-2">
        <ShieldAlert size={46} className="text-red-500" />
        <h2 className="pb-1">Page not found</h2>
      </div>
      <Link to="/">
        <Button variant="outline">
          <ArrowLeft /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
