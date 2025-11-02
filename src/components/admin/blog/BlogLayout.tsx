'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { BlogPost } from '@/lib/blog/blog-types';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

interface BlogLayoutProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
  useFullUrl?: boolean;
}

export function BlogLayout({ post, relatedPosts = [], useFullUrl = false }: BlogLayoutProps) {
  return (
    <>
      <HeaderSetter hasHeroImage={false} />
      <PageWrapper className="pb-8 sm:pb-12 lg:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <header className="mb-8 sm:mb-12">
          {/* Category Badge */}
          {post.category && (
            <Link
              href={`/blog/${post.category}`}
              className="inline-block text-sm font-bold text-primary hover:text-primary-dark mb-4 uppercase tracking-wide"
            >
              {post.category}
            </Link>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-background-blue mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {/* Author */}
            <div className="flex items-center gap-2">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="font-medium text-gray-900">{post.author.name}</span>
            </div>

            {/* Date */}
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>

            {/* Reading Time */}
            {post.readingTime && (
              <span>{post.readingTime} min read</span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 sm:mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}
        
        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none mb-12 overflow-hidden
            [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-background-blue [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-6
            [&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-background-blue [&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-4
            [&_h4]:font-heading [&_h4]:font-bold [&_h4]:text-background-blue [&_h4]:text-xl [&_h4]:mt-6 [&_h4]:mb-3
            [&_p]:!text-gray-900 [&_p]:leading-relaxed [&_p]:mb-4
            [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline hover:[&_a]:text-primary-dark
            [&_strong]:!text-gray-900 [&_strong]:font-bold
            [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6
            [&_li]:!text-gray-900 [&_li]:mb-2
            [&_code]:text-primary [&_code]:bg-blue-50 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
            [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:overflow-x-auto [&_pre]:max-w-full
            [&_blockquote]:border-l-4 [&_blockquote]:border-l-primary [&_blockquote]:bg-blue-50 [&_blockquote]:py-2 [&_blockquote]:px-4
            [&_img]:rounded-xl [&_img]:shadow-lg
            [&_pre]:whitespace-pre-wrap [&_pre]:break-words [&_code]:break-words"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-200">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-background-blue/10 text-background-blue font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio */}
        {post.author.bio && (
          <div className="bg-background-blue/5 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  className="rounded-full flex-shrink-0"
                />
              )}
              <div>
                <h3 className="font-heading font-bold text-background-blue mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-700">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-heading font-bold text-background-blue mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedUrl = relatedPost.category
                  ? `/blog/${relatedPost.category}/${relatedPost.slug}`
                  : `/blog/${relatedPost.slug}`;
                return (
                  <Link
                    key={relatedPost.slug}
                    href={relatedUrl}
                    className="group"
                  >
                    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      {relatedPost.image && (
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.imageAlt || relatedPost.title}
                            width={400}
                            height={225}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-background-blue group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </PageWrapper>
    </>
  );
}