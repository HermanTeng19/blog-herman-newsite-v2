import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

export default function Pagination({ currentPage, totalPages, totalPosts }: PaginationProps) {
  if (totalPages <= 1) {
    return null; // Don't show pagination if there's only one page
  }

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 3) {
        // Show first 3 pages, ellipsis, and last page
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page, ellipsis, and last 3 pages
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show first page, ellipsis, current page and neighbors, ellipsis, last page
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-12 mb-8">
      {/* Posts count info */}
      <div className="text-center text-gray-600 mb-6">
        Showing page {currentPage} of {totalPages} ({totalPosts} total posts)
      </div>
      
      {/* Pagination controls */}
      <div className="flex justify-center items-center space-x-2">
        {/* Previous button */}
        {currentPage > 1 ? (
          <Link 
            href={`/blog/page/${currentPage - 1}`}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
            Previous
          </Link>
        ) : (
          <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
            Previous
          </span>
        )}
        
        {/* Page numbers */}
        <div className="flex space-x-1">
          {pageNumbers.map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-sm font-medium text-gray-500">...</span>
              ) : (
                <Link
                  href={`/blog/page/${page}`}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        {/* Next button */}
        {currentPage < totalPages ? (
          <Link 
            href={`/blog/page/${currentPage + 1}`}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            Next
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </Link>
        ) : (
          <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
            Next
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </span>
        )}
      </div>
    </div>
  );
} 