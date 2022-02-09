## v1

- insted of NextJS dynamic import we are using vanilla dynamic import for PDF React component which should be rendered on function call

## v2

- uses NextJS dynamic import for component (DynamicPDFExport.tsx) so that the react-pdf is not imported on server and component not rendered on server

in bot examples page will crash but only in v1 will there be an error in console
