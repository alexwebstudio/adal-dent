import { reviewsBlock } from "@/content/copy";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/Heading";
import { Star } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { cx } from "@/lib/utils";

export function Reviews() {
  return (
    <SectionCard>
      <SectionHead
        eyebrow={reviewsBlock.eyebrow}
        title={reviewsBlock.title}
        lead={reviewsBlock.lead}
        action={
          <p className="flex items-center gap-2">
            <Star className="text-accent" />
            <Mono className="!text-[20px] font-medium">{site.stats.rating.toFixed(1)}</Mono>
            <Mono className="text-ink-muted">· {site.stats.reviews} отзывов</Mono>
          </p>
        }
      />
      <Reveal group className="reviews-rail gap-3 md:grid md:grid-cols-3 lg:gap-4">
        {reviews.map((review, index) => (
          <figure key={index} data-reveal-item="" className={cx("flex min-h-[240px] flex-col justify-between gap-8 rounded-[18px] p-5 lg:rounded-[22px] lg:p-6", review.placeholder ? "dash-card" : "bg-surface-2")}>
            <div>
              <div className="mb-4 flex gap-0.5 text-accent" role="img" aria-label={`Оценка ${review.rating} из 5`}>
                {Array.from({ length: review.rating }, (_, star) => (
                  <Star key={star} width={16} height={16} />
                ))}
              </div>
              <blockquote className={review.placeholder ? "text-ink-muted" : ""}>{review.text}</blockquote>
            </div>
            <figcaption className="flex items-center justify-between gap-3">
              <span className="font-medium">{review.author}</span>
              <Mono className="!text-[13px] text-ink-muted">{review.source}</Mono>
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </SectionCard>
  );
}
