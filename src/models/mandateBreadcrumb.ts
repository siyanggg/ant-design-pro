const mandateBreadcrumb = () => {
  const [mandateBreadcrumbList, setMandateBreadcrumbList] = useState<MandateBreadcrumbType[]>([
    DefaultMandateBreadcrumb,
  ]);

  return {
    mandateBreadcrumbList,
    setMandateBreadcrumbList,
  };
};

export default mandateBreadcrumb;
