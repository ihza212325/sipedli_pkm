export const TableRowJobs = ({ key, job }) => {
  return (
    <>
      <tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">{job.id}</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-wrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">{job.title}</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">
            <div class="text-sm font-medium text-gray-900">
              {job.description}
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">
            {job.User.username}
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              {job.Company.name}
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              <li>javaScript</li>
              <li>php</li>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <a
            href="#"
            v-if="+authorizationEdit === movie.User.id || authorization === 'admin'"
            class="text-indigo-600 hover:text-indigo-900"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </a>
        </td>
      </tr>
    </>
  );
};
