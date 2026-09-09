import type { Education } from "@/types/cv";

interface CvEducationProps {
    title: string;
    items: Education[];
}

export function CvEducation({ title, items }: CvEducationProps) {
    return (
        <section className="cv-section">
            <h2 className="cv-section-title">{title}</h2>

            <div className="education-list">
                {items.map((item, index) => {
                    const showCategory =
                        item.category &&
                        item.category !== items[index - 1]?.category;

                    return (
                        <article
                            className="education-item"
                            key={`${item.institution}-${item.course}`}
                        >
                            <div className="education-content">
                                {showCategory && (
                                    <div className="education-category">
                                        {item.category}
                                    </div>
                                )}

                                <h3 className="education-course">
                                    {item.course}
                                </h3>

                                <p className="education-institution">
                                    {item.institution}

                                    {item.certificateUrl &&
                                        item.certificateLabel && (
                                            <>
                                                {" · "}
                                                <a
                                                    href={item.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.certificateLabel}
                                                </a>
                                            </>
                                        )}
                                </p>
                            </div>

                            <span className="education-period">
                                {item.period}
                            </span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}